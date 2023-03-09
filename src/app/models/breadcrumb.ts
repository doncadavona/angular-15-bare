export class Breadcrumb {
  index!: number;
  path!: string;
  name!: string;

  constructor(partialValues: Partial<Breadcrumb>) {
    Object.assign(this, partialValues);
  }
}
