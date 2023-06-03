---
to: src/components/angular/<%= name %>/<%= name %>.component.ts
---
import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: ` <div>this is  angular template</div> `,
})
export class <%= name %> {}
