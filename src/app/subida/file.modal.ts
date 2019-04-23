export class FileItem {

  $key: string;
   file: File;
   fileName: string;
   estaSubiendo: boolean;
   url: string;

  public progress: number;
  createdAt: Date = new Date();

  constructor( file: File ) {
    this.file = file;
    this.fileName = file.name;

    this.estaSubiendo = false;

    this.progress = 0;
  }
}
