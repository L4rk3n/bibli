import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fBookCreate() {
    return new FormGroup({
        Nom: new FormControl('', [Validators.required]),
        Prenom: new FormControl(null, [Validators.required]),
        DatedeNaissance: new FormControl(0, [Validators.required]),
        email: new FormControl(0, [Validators.required]),
        password: new FormControl(0, [Validators.required]),
        idadresse: new FormControl(0, [Validators.required])
    })
}
