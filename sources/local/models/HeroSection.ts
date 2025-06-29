import { Model } from '@stackbit/types';

export const HeroSection: Model = {
  type: 'object',
  name: 'HeroSection',
  label: 'Hero Section',
  labelField: 'title',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle'
    },
    {
      type: 'string',
      name: 'colors',
      label: 'Colors'
    },
    {
      type: 'string',
      name: 'elementId',
      label: 'Element ID'
    }
  ]
};
