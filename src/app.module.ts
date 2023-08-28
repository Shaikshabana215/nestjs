import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';
import { Student, StudentSchema } from './schema/student.schema';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';
import { User } from './auth/schema/user.schema';
import { UserModule } from './user/user.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017',{dbName:'nestapi'}),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Canteen'),

    BookModule,
    MongooseModule.forFeature([{name:'Student',schema:StudentSchema}]),
    AuthModule,
    PassportModule,
    // JwtModule.register({secret:'secrete', signOptions: {expiresIn: '1h'}}),
    StudentModule,
   User,
   UserModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStrategy,StudentService],
})
export class AppModule {}
