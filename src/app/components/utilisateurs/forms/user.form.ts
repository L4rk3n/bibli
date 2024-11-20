import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fUserCreate() {
    return new FormGroup({

        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        datedeNaissance: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        iDadresse: new FormControl(0, [Validators.required])
    })
}
