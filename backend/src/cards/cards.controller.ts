import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { AddCardBodyDto } from './dto/add-card-body.dto';
import { Cards } from './cards.interface';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get('/')
  async getCards(): Promise<Cards> {
    return await this.cardsService.getCards();
  }

  @Post('/:id')
  async addCard(
    @Param('id') id: string,
    @Body() addCardBody: AddCardBodyDto,
  ): Promise<string> {
    await this.cardsService.addCard(id, addCardBody);
    return 'Card was added successfully!';
  }

  @Delete('/:id')
  async deleteCard(@Param('id') id: string): Promise<string> {
    await this.cardsService.deleteCard(id);
    return 'Card was deleted successfully!';
  }
}