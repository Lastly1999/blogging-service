import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { TagModule } from './modules/tag/tag.module'
import { ArticleModule } from './modules/article/article.module'

@Module({
    imports: [UserModule, TagModule, ArticleModule],
})
export class AppModule {}
