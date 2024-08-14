import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { UploadController } from './upload.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkModule } from './work.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017'),
    WorkModule,
  ],
  controllers: [AppController, WorkController, UploadController],
  providers: [AppService]
})
export class AppModule {}