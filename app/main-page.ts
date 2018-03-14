import { MainViewdModel } from './main-view-model'

export function onLoad(args) {
    args.object.bindingContext = new MainViewdModel()
}