import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game'; 

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {
  constructor(public gameService: GameService) {}

}