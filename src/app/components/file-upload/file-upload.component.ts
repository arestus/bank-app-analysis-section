import { LoaderService } from './../../services/loader.service';
import { UploadService } from './../../services/upload.service';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null as any;
  url: any;

  constructor(
    private http: HttpClient,
    private uploadService: UploadService,
    private store: StoreService,
    private loader: LoaderService,
  ) {}

  ngOnInit(): void {
  }

  onFileSelected(event) {
    var userFile = event.target.files[0]
    if (userFile.name.includes(".csv")) {
      this.selectedFile = <File>event.target.files[0]
    } else if (userFile.name.includes(".pdf")) {
      this.selectedFile = <File>event.target.files[0]
    } else {
      alert("Please choose only 'pdf' or 'csv' format file")
      this.selectedFile = null as any
    }
  }


  onUpload() {
    this.loader.show()
    this.uploadService.upload(this.selectedFile).subscribe(result => {
      console.log(result)
      this.store.onSave(result)
      this.loader.hide()
    }) 
    this.store.sendMessage('isFile')
    // this.uploadService.upload(this.selectedFile).subscribe(data => {
    //   console.log(data)
    // })  
  }
}


