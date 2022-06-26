import { NgModule } from "@angular/core";
import  {CommonModule} from "@angular/common";
import { CategoryComponent } from "./category.component";
import { IonicModule } from "@ionic/angular";
@NgModule({
    declarations:[CategoryComponent],
    imports:[CommonModule, IonicModule],
    exports:[CategoryComponent],
    providers:[],
})
export class CategoryModule{}
