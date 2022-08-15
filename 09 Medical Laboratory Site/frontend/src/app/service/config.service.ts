import { INgTableColumn } from './../data-table/ng-data-table/ng-data-table.component';
import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
  class: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  sidebarMenu: IMenuItem[] = [
    { link: '/', title: 'Kezdőoldal', icon: 'home', class: '', },
    {
      link: '/test-card',
      title: 'Elérhető vizsgálatok',
      icon: 'science',
      class: '',
    },
  ];
  adminSidebarMenu: IMenuItem[] = [
    {
      link: '/patient',
      title: 'Betegek',
      icon: 'person',
      class: '',
    },
    {
      link: '/sample',
      title: 'Minták',
      icon: 'biotech',
      class: '',
    },
    {
      link: '/physician',
      title: 'Orvosok',
      icon: 'person',
      class: '',
    },
    {
      link: '/test',
      title: 'Vizsgálatok',
      icon: 'science',
      class: '',
    },
    {
      link: '/reagent',
      title: 'Reagensek',
      icon: 'bloodtype',
      class: '',
    },
  ];

  patientTableColumns: INgTableColumn[] = [
    { key: 'name', title: 'Név' },
    { key: 'taj', title: 'TAJ' },
    { key: 'birth_date', title: 'Szül. idő' },
    { key: 'mothers_name', title: 'Anyja neve' },
  ];
  physicianTableColumns: INgTableColumn[] = [
    { key: 'name', title: 'Név' },
    { key: 'reg_number', title: 'Pecsétszám' },
    { key: 'city', title: 'Település' },
  ];
  reagentTableColumns: INgTableColumn[] = [
    { key: 'name', title: 'Név' },
    { key: 'manufacturer', title: 'Gyártó' },
    { key: 'price', title: 'Ár' },
    { key: 'stock', title: 'Készlet' },
  ];
  sampleTableColumns: INgTableColumn[] = [
    { key: 'type', title: 'Típus' },
    { key: 'patient_name', title: 'Beteg neve' },
    { key: 'physician_name', title: 'Beküldő orvos' },
    { key: 'sampling_date', title: 'Mintavétel dátuma' },
  ];
  testTableColumns: INgTableColumn[] = [
    { key: 'name', title: 'Név' },
    { key: 'price', title: 'Ár' },
    { key: 'point', title: 'TB pont' },
    { key: 'description', title: 'Leírás' },
  ];

  sampleTypes: any[] = [
    'vizelet',
    'széklet',
    'köpet',
    'sebváladék',
    'liquor',
    'vér',
    'torok váladék',
    'orr váladék',
  ];

  homeHeader: any = {
    title: 'Üdvözöljük a Micro-Lab oldalán!',
    text: 'A Micro-Lab modern diagnosztikai szolgáltatásokat kínál - ezen belül rutin vizsgálatokat és speciális teszteket is. Célunk, hogy széles körben elérhetővé tegyük, költséghatékonyan, de a legmagasabb minőséget garantálva, a páciensek számára a labordiagnosztikai eljárásokat. Laboratóriumi vizsgálatok aznapi eredménnyel, az ország minden pontján.',
  };
  testCardHeader: any = {
    title: 'Aktuálisan elérhető vizsgálataink',
    text: 'Itt találja a Micro-Lab által jelenleg végzett vizsgálatokat. Az elérhető vizsgálatok listáját folyamatosan bővítjük.',
  };
  adminHeader: any = {
    title: 'Kedves Felhasználó, Ön belépett a Micro-Lab adminisztrációs felületére!',
    text: 'Kérjük, hogy a laboratórium adminisztrációs rendszerében az adatokat nagy körültekintéssel kezelje! Köszönettel: a Micro-Lab vezetősége.',
  };

  constructor() {}
}
