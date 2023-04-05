import { Module } from '@nestjs/common';

import { ConfigurationModule } from './configuration/configuration.module';
import { MessagesModule } from './messages/messages.module';
import { CommonModule } from './common/common.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigurationModule, AuthModule, MessagesModule, UserModule, CommonModule],
})
export class AppModule {}
