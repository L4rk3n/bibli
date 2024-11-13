import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fBookCreate() {
    return new FormGroup({
        titre: new FormControl('', [Validators.required]),
        idGenre: new FormControl(null, [Validators.required, Validators.min(-30), Validators.max(-1)]),
        prix: new FormControl(0, [Validators.required, Validators.min(0.01)]),
        stockLocation: new FormControl(0, [Validators.required]),
        stockAchat: new FormControl(0, [Validators.required, Validators.min(1)])
    })
}