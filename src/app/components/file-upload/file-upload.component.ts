import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null as any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    var userFile = event.target.files[0]
    if (userFile.name.includes(".csv")) {
      this.selectedFile = <File>event.target.files[0]
    } else if(userFile.name.includes(".pdf")) {
      this.selectedFile = <File>event.target.files[0]
    } else {
      alert("Please choose only 'pdf' or 'csv' format file")
      this.selectedFile = null as any
    }
    console.log(this.selectedFile)
  }

  onUpload() {
    // const fd = new FormData()
    
    // fd.append('cart-data', this.selectedFile, this.selectedFile.name)
    
    // this.http.post('link to api', fd, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%')
    //   } else if(event.type === HttpEventType.Response) {
    //     console.log(event)
    //   }
    // })
    console.log("Check")
  }
}
