import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../subida/file.modal';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.mouseSobre.emit( true );
    this.prevenirDetener( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseSobre.emit( false );
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {

    const transferencia = this.getTransferencia( event );

    if ( !transferencia ) {
      return;
    }

    this.extraerArchivos( transferencia.files );

    this.prevenirDetener( event );
    this.mouseSobre.emit( false );
  }

  private getTransferencia( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }


  private extraerArchivos( archivosListas: FileList ) {



// tslint:disable-next-line: forin
    for ( const propiedad in Object.getOwnPropertyNames( archivosListas ) ) {

      const archivoTemporal = archivosListas[propiedad];

      if ( this.archivoPuedeSerCargado(archivoTemporal ) ) {

        const nuevoArchivo = new FileItem( archivoTemporal );
        this.archivos.push( nuevoArchivo );
      }
    }

    console.log( this.archivos );
  }
  //validaciones

  private archivoPuedeSerCargado ( archivo: File ): boolean {

    if ( !this.archivoYaExiste( archivo.name) && this.esImagen( archivo.type)) {
      return true;
    } else {
      return false;
    }
  }


  private prevenirDetener( event ) {

    event.preventDefault();
    event.stopPropagation();
  }

  private archivoYaExiste( nombreArchivo: String ): boolean {

    for( const archivo of this.archivos ) {

      if ( archivo.fileName === nombreArchivo ) {
        console.log(' El archivo ' + nombreArchivo + ' ya esta agregado ');
        return true;
      }
    }
    return false;
  }

  private esImagen( tipoArchivo: String): boolean {

    return( tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }
}
