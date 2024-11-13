import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fadresseCreate() {
    return new FormGroup({
    pays: new FormControl('', [Validators.required]),
    localite: new FormControl('', [Validators.required]),
    rue: new FormControl('', [Validators.required]),
    numero: new FormControl(0, [Validators.required]),
    boite: new FormControl(0),
    utilisateurId: new FormControl(-1, [Validators.required])
    })
}
