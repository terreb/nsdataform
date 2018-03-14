import { Observable } from 'data/observable'

class CCDetails {
    number: number = null
    month: number = null
    year: number = null
    name: string = null
    CVC: number = null
}

export class MainViewdModel extends Observable {
    private _ccDetails = new CCDetails()
    get ccDetails() {
        return this._ccDetails
    }
}
