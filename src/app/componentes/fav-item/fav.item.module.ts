import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FavItemComponent } from "./fav.item.component";

@NgModule({
    declarations:[FavItemComponent],
    imports:[CommonModule, IonicModule],
    exports:[FavItemComponent],

})
export class FavItemModule{}