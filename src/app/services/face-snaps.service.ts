import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Badis',
      description: 'mon meilleur ami depuis tout petit',
      imageUrl:
        'https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/166027150_5364381666967860_8658206870311553175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c27UYCNJxUEAX-luALr&_nc_ht=scontent.ftun14-1.fna&oh=00_AT__PWodBkheqyqBSbTaAk_A_eJ63q03xZPH_xKJIA3nyw&oe=6344DE43',
      createdDate: new Date(),
      snaps: 0,
      location: 'medenine',
    },
    {
      id: 2,
      title: 'Barcelone is screwd up tomorrow',
      description: 'I have no sympathy for it',
      imageUrl:
        'https://static.onzemondial.com/8/2022/08/photo_article/790330/312675/1200-L-sngal-bayern-sadio-man-prvient-dj-liverpool-pour-leur-prochain-affrontement.jpg',
      createdDate: new Date(),
      snaps: 56,
      location: 'camp nou',
    },
    {
      id: 3,
      title: 'avantages et méfaits de programmation',
      description: 'soyez pas alarmé',
      imageUrl:
        'https://interservices.fr/blog/wp-content/uploads/2019/09/apprendre-la-programmation-informatique-755x487.jpg',
      createdDate: new Date(),
      snaps: 12,
    },
    {
      id: 4,
      title: 'Badis',
      description: 'mon meilleur ami depuis tout petit',
      imageUrl:
        'https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/166027150_5364381666967860_8658206870311553175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c27UYCNJxUEAX-luALr&_nc_ht=scontent.ftun14-1.fna&oh=00_AT__PWodBkheqyqBSbTaAk_A_eJ63q03xZPH_xKJIA3nyw&oe=6344DE43',
      createdDate: new Date(),
      snaps: 0,
      location: 'medenine',
    },
    {
      id: 5,
      title: 'Barcelone is screwd up tomorrow',
      description: 'I have no sympathy for it',
      imageUrl:
        'https://static.onzemondial.com/8/2022/08/photo_article/790330/312675/1200-L-sngal-bayern-sadio-man-prvient-dj-liverpool-pour-leur-prochain-affrontement.jpg',
      createdDate: new Date(),
      snaps: 56,
      location: 'camp nou',
    },
    {
      id: 6,
      title: 'avantages et méfaits de programmation',
      description: 'soyez pas alarmé',
      imageUrl:
        'https://interservices.fr/blog/wp-content/uploads/2019/09/apprendre-la-programmation-informatique-755x487.jpg',
      createdDate: new Date(),
      snaps: 12,
    },
  ];

  getAllFaceSnap(): FaceSnap[] {
    return this.faceSnaps;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number , snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }
  
}
