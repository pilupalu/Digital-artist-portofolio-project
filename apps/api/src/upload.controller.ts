import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', // Folderul in care vor fi stocate fisierele
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
            },
        }),
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return { filename: file.filename };
    }
}