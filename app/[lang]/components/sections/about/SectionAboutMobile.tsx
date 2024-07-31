import React, { FC } from 'react';
import Article from './components/mobile/AboutArticle';
import ArticleHow from './components/mobile/articles/AboutArticleHow';
import ArticleWhat from './components/mobile/articles/AboutArticleWhat';
import ArticleWhom from './components/mobile/articles/AboutArticleWhom';

interface Props {
  dict: any;
}

const SectionAboutMobile: FC<Props> = ({ dict }) => {
  return (
    <div className="block md:hidden drop-shadow-2xl">
      <Article heading={dict.carouselItems.item1.heading} style="bright">
        <ArticleWhat dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item2.heading} style="dark">
        <ArticleWhom dict={dict} />
      </Article>
      <Article heading={dict.carouselItems.item3.heading} style="bright">
        <ArticleHow dict={dict} />
      </Article>
    </div>
  );
};

export default SectionAboutMobile;
