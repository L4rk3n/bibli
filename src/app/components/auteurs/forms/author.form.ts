import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fauthorCreate() {
    return new FormGroup({
        Nom: new FormControl('', [Validators.required]),
        Prenom: new FormControl(null, [Validators.required]),

    })
}