import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

export class FirebaseInitialization {

  async initialization() {
    this.response = await fetch('/api/tokenInfo')

    if (!this.response.ok) {
      throw new Error('Failed to load Firebase config')
    }

    this.conf = await this.response.json()

    if (!this.conf || typeof this.conf !== 'object') {
      throw new Error('Firebase config is invalid')
    }

    this.app = initializeApp(this.conf);
    getDatabase(this.app);
  }
}

export const firebase = new FirebaseInitialization();
