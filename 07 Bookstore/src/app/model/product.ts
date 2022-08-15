export class Product {
  [key: string]: any;
  id: number = 0;
  catId: number = 0;
  author: string ='';
  title: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean= true;

constructor(properties?: Product){
  if (properties){
  this.id = properties.id || 0;
  this.catId = properties.catId;
  this.author = properties.author || '';
  this.title = properties.title || '';
  this.description = properties.description || '';
  this.image = properties.image || '';
  this.price = properties.price || 0;
  this.stock = properties.stock || 0;
  this.featured = properties.featured || false;
  this.active = properties.active || true;

  }
}
}
