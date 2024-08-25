import React, { FC } from 'react';
import Article from './components/mobile/AboutArticle';
import ArticleHow from './components/mobile/articles/AboutArticleHow';
import ArticleWhat from './components/mobile/articles/AboutArticleWhat';
import ArticleWhom from './components/mobile/articles/AboutArticleWhom';
import { useTranslations } from 'next-intl';

const SectionAboutMobile: FC = () => {
  const t = useTranslations('sections.about.carouselItems');
  return (
    <div className="block md:hidden drop-shadow-2xl">
      <Article heading={t('item1.heading')} style="bright">
        <ArticleWhat />
      </Article>
      <Article heading={t('item2.heading')} style="dark">
        <ArticleWhom />
      </Article>
      <Article heading={t('item3.heading')} style="bright">
        <ArticleHow />
      </Article>
    </div>
  );
};

export default SectionAboutMobile;
