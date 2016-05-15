import { Pipe } from '@angular/core';

@Pipe({
    name: 'transform'
})

export class PreviewPipe {
    transform(value) {
        let transformedArray = [];
        let counter = 0;
        for (let i = 0; i < value.length; i += 2) {
            transformedArray[counter] = {};
            transformedArray[counter].primaryColor = value[i];
            transformedArray[counter].secondaryColor = value[i + 1] || value[i];
            counter++;
        }

        return transformedArray;
    }
}
