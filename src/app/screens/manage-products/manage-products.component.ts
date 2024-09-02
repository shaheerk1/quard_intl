import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css',
})
export class ManageProductsComponent {
  products:any = [];

  editProductForm: FormGroup;
  isDialogOpen = false;
  isCreateDialogOpen = false;
  selectedProduct: any;

  constructor(private fb: FormBuilder, private productService: CommonServiceService) {
    this.editProductForm = this.fb.group({
      brand: [''],
      description: [''],
      category: [''],
      members: [''],
    });
  }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(): void {
    
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        console.log(response);
        this.products = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }

  getMemberNames(product: any): string {
    return product.product_members
      .map((member: any) => member.user.name)
      .join(', ');
  }

  editProduct(product: any) {
    // Handle edit logic
    console.log('Edit product:', product);

    // Open the dialog
    this.openDialog(product);
  }

  deleteProduct(productId: number) {
    // Handle delete logic
    console.log('Delete product with ID:', productId);

    this.productService.deleteProduct(productId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.products = this.products.filter((product:any) => product.id !== productId);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });

  }

  openDialog(product: any): void {
    this.selectedProduct = product;
    this.isDialogOpen = true;

    this.editProductForm.patchValue({
      brand: product.brand,
      description: product.description,
      category: product.category,
      members: product.product_members
        .map((member: any) => member.user.id)
        .join(', '),
    });
  }

  openCreateDialog(): void {
    this.isCreateDialogOpen = true;

    this.editProductForm.patchValue({
      brand: '',
      description: '',
      category: '',
      members: '',
    });
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }
  closeCreateDialog(): void {
    this.isCreateDialogOpen = false;
  }

  onSubmit(): void {
    
    const product = {
      ...this.selectedProduct,
      ...this.editProductForm.value,
      product_members: this.editProductForm.value.members.split(',').map((id: string) => parseInt(id)),
    };
    
    if (this.selectedProduct) {
      // Update the product
      this.productService.updateProduct(product).subscribe({
        next: (response: any) => {
          console.log(response);
          this.products = this.products.map((p: any) => (p.id === product.id ? product : p));
          this.closeDialog();

          this.products = [];
          this.getProducts();

        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      });
    }
      // Close the dialog
    
  }
  onCreateSubmit(): void {
    const product = {
      ...this.editProductForm.value,
      product_members: this.editProductForm.value.members.split(',').map((id: string) => parseInt(id)),
    };

    // Create the product
    this.productService.addProduct(product).subscribe({
      next: (response: any) => {
        console.log(response);
        this.products = [...this.products, response];
        this.closeCreateDialog();

        this.products = [];
        this.getProducts();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
    // Close the dialog
    this.closeCreateDialog();
  }
}
