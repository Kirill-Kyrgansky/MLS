import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-camera',
  templateUrl: './view-camera.component.html',
  styleUrls: ['./view-camera.component.scss']
})
export class ViewCameraComponent implements OnInit {
  selectedCamera: any;
  camerasList: any;

  ngOnInit(): void {
    this.camerasList = [
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      }, {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },
      {
        turnstile: 'Не подключен',
        data1: 'Проходная',
        data2: 'Не распознан',
        data3: 'Не в группе',
        camera: '../../../assets/images/templates/camera-list.png'
      },

    ];
    this.selectedCamera = {
      name: 'Камера 01',
      description: 'Тут много текста о том где и что за камера',
      turnstileOpen: false,
      turnstileLink: '',
      viewCamera: '../../../../src/assets/images/templates/templates-video-camera.png'
    };
  }

}
