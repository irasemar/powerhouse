import { Injectable, Inject } from "@angular/core";
import {
    HttpClient,
    HttpRequest,
    HttpEventType,
    HttpResponse
} from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService } from "./auth.services";


//let url = "http://localhost:3000/upload";


@Injectable({
    providedIn: 'root'
  })
export class UploadService {
    constructor(private http: HttpClient,
        public auth: AuthService,
        @Inject(APP_CONFIG) private config: AppConfig) { }
    

    public uploadFotografiaInstructor(
        files: Set<File>, NPK: number
    ): { [key: string]: { progress: Observable<number> } } {
        // this will be the our resulting map
        const status: { [key: string]: { progress: Observable<number> } } = {};
        console.log(files);
        files.forEach(file => {
            // create a new multipart-form for every file
            const formData: FormData = new FormData();
            formData.append("file", file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var url = `${this.config.apiEndpoint}/v1/catalogos/Instructor/${NPK}/filefotoInstructor`;
            const req = new HttpRequest("POST", url, formData, {
                reportProgress: true
            });

            // create a new progress-subject for every file
            const progress = new Subject<number>();

            // send the http-request and subscribe for progress-updates

            let startTime = new Date().getTime();
            this.http.request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    // calculate the progress percentage

                    const percentDone = Math.round((100 * event.loaded) / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                } else if (event instanceof HttpResponse) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });

            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });

        // return the map of progress.observables
        return status;
    }
    public uploadFotografiaInstructor2(
        files: Set<File>, NPK: number
    ): { [key: string]: { progress: Observable<number> } } {
        // this will be the our resulting map
        const status: { [key: string]: { progress: Observable<number> } } = {};

        files.forEach(file => {
            // create a new multipart-form for every file
            const formData: FormData = new FormData();
            formData.append("file", file, file.name);
            console.log(file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var url = `${this.config.apiEndpoint}/v1/catalogos/Instructor/${NPK}/filefotoInstructor2`;
            console.log(formData);
            const req = new HttpRequest("POST", url, formData, {
                reportProgress: true
            });

            // create a new progress-subject for every file
            const progress = new Subject<number>();

            // send the http-request and subscribe for progress-updates

            let startTime = new Date().getTime();
            this.http.request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    // calculate the progress percentage

                    const percentDone = Math.round((100 * event.loaded) / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                } else if (event instanceof HttpResponse) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });

            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });

        // return the map of progress.observables
        return status;
    }

    public uploadFotografiaRedSocial(
        files: Set<File>, NPK: number
    ): { [key: string]: { progress: Observable<number> } } {
        // this will be the our resulting map
        const status: { [key: string]: { progress: Observable<number> } } = {};

        files.forEach(file => {
            // create a new multipart-form for every file
            const formData: FormData = new FormData();
            formData.append("file", file, file.name);
            console.log(file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var url = `${this.config.apiEndpoint}/v1/catalogos/RedSocial/${NPK}/fileRedSocial`;
            console.log(formData);
            const req = new HttpRequest("POST", url, formData, {
                reportProgress: true
            });

            // create a new progress-subject for every file
            const progress = new Subject<number>();

            // send the http-request and subscribe for progress-updates

            let startTime = new Date().getTime();
            this.http.request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    // calculate the progress percentage

                    const percentDone = Math.round((100 * event.loaded) / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                } else if (event instanceof HttpResponse) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });

            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });

        // return the map of progress.observables
        return status;
    }
    public uploadFotografiaInstructorMusica(
        files: Set<File>, NPK: number
    ): { [key: string]: { progress: Observable<number> } } {
        // this will be the our resulting map
        const status: { [key: string]: { progress: Observable<number> } } = {};

        files.forEach(file => {
            // create a new multipart-form for every file
            const formData: FormData = new FormData();
            formData.append("file", file, file.name);
            console.log(file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var url = `${this.config.apiEndpoint}/v1/catalogos/InstructorMusica/${NPK}/filefotoInstructorMusica`;
            console.log(formData);
            const req = new HttpRequest("POST", url, formData, {
                reportProgress: true
            });

            // create a new progress-subject for every file
            const progress = new Subject<number>();

            // send the http-request and subscribe for progress-updates

            let startTime = new Date().getTime();
            this.http.request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    // calculate the progress percentage

                    const percentDone = Math.round((100 * event.loaded) / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                } else if (event instanceof HttpResponse) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });

            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });

        // return the map of progress.observables
        return status;
    }
}