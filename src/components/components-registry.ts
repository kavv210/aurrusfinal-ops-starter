import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export function getComponent(key: string): ComponentType {
    return components[key];
}

const components = {
    // ✅ Added these two missing components
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    FeaturesSection: dynamic(() => import('./sections/FeaturesSection')),

    // ✅ Existing components
    AutoCompletePosts: dynamic(() => import('./blocks/SearchBlock/AutoCompletePosts')),
    CarouselSection: dynamic(() => import('./sections/CarouselSection')),
    CheckboxFormControl: dynamic(() => import('./blocks/FormBlock/CheckboxFormControl')),
    DividerSection: dynamic(() => import('./sections/DividerSection')),
    EmailFormControl: dynamic(() => import('./blocks/FormBlock/EmailFormControl')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemToggle: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItemToggle')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedPeopleSection: dynamic(() => import('./sections/FeaturedPeopleSection')),
    FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
    FormBlock: dynamic(() => import('./blocks/FormBlock')),
    GenericSection: dynamic(() => import('./sections/GenericSection')),
    ImageBlock: dynamic(() => import('./blocks/ImageBlock')),
    ImageGallerySection: dynamic(() => import('./sections/ImageGallerySection')),
    PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
    PricingSection: dynamic(() => import('./sections/PricingSection')),
    RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
    SelectFormControl: dynamic(() => import('./blocks/FormBlock/SelectFormControl')),
    TextareaFormControl: dynamic(() => import('./blocks/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./blocks/FormBlock/TextFormControl')),
    VideoBlock: dynamic(() => import('./blocks/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout'))
};
