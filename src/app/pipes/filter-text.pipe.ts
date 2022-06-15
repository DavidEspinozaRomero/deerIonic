import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filterText" })
export class FilterTextPipe implements PipeTransform {
  transform(value: any[], text: string = ''): any[] {
    console.log(text);

    return value.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    // return '';
  }
}
