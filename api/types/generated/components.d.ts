import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsAlert extends Schema.Component {
  collectionName: 'components_atoms_alerts';
  info: {
    displayName: 'Alert';
    icon: 'feather';
    description: '';
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
    isActive: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    bgColor: Attribute.String;
  };
}

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    color: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.DefaultTo<'filled'>;
    svg: Attribute.Text & Attribute.Required;
    url: Attribute.Text;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface AtomsLicense extends Schema.Component {
  collectionName: 'components_atoms_licenses';
  info: {
    displayName: 'License';
    icon: 'crown';
  };
  attributes: {
    key: Attribute.String;
    name: Attribute.String;
    spdx_id: Attribute.String;
    url: Attribute.String;
  };
}

export interface AtomsLink extends Schema.Component {
  collectionName: 'components_atoms_links';
  info: {
    displayName: 'Link';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.alert': AtomsAlert;
      'atoms.button': AtomsButton;
      'atoms.license': AtomsLicense;
      'atoms.link': AtomsLink;
    }
  }
}
