import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import forFeatureDb from 'src/db/for-feature.db';

@Module({
  imports: [MongooseModule.forFeature(forFeatureDb)],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {}
