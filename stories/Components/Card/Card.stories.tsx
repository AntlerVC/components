import React from 'react';

import BasicCard from '../../../src/Card/BasicCard';
import ProfileCard from '../../../src/Card/ProfileCard';
import ProfileTabbedCard from '../../../src/Card/ProfileTabbedCard';
import CardInfoList from '../../../src/Card/CardInfoList';
import CardTagList from '../../../src/Card/CardTagList';

export default {
  title: 'Antler Theme/Components/Card',
  component: ProfileCard,
  argTypes: {
    body: {
      defaultValue:
        'Appboxo is a super app infrastructure platform that allows companies to launch and integrate mini-apps within their software. They recently completed a US$1.1m seed funding round led by Founders Fund, with participation from 500 Startups, Plug and Play Tech Center and Antler. They plan to use the fresh funds to scale the platform and add new mini-apps in travel, e-commerce, finance, and lifestyle industries.',
      control: { type: 'text' },
    },
    buttonLabel: {
      defaultValue: 'Learn More',
      control: { type: 'text' },
    },
    buttonLink: {
      defaultValue: 'https://google.com/',
      control: { type: 'text' },
    },
    width: {
      defaultValue: 320,
      control: {
        type: 'range',
        min: 0,
        max: 1000,
      },
    },
    className: { table: { disable: true }, control: { disable: true } },
    style: { table: { disable: true }, control: { disable: true } },
    actionRows: { table: { disable: true }, control: { disable: true } },
    image: { table: { disable: true }, control: { disable: true } },
    titleHeadingLevel: { table: { disable: true }, control: { disable: true } },
  },
};

export const Basic = args => (
  <BasicCard
    {...args}
    style={{ width: args.width }}
    actionRows={
      args.buttonLabel
        ? [
            {
              primaryLink: {
                label: args.buttonLabel,
                href: args.buttonLink,
                target: '_blank',
                rel: 'noopener noreferer',
              },
            },
          ]
        : []
    }
  />
);
Basic.argTypes = {
  title: { table: { disable: true }, control: { disable: true } },
  overline: { table: { disable: true }, control: { disable: true } },
  overlineSecondary: { table: { disable: true }, control: { disable: true } },
};

export const Profile = args => (
  <ProfileCard
    {...args}
    style={{ width: args.width }}
    image={{ imageUrl: args.imageSource }}
    actionRows={
      args.buttonLabel
        ? [
            {
              primaryLink: {
                label: args.buttonLabel,
                href: args.buttonLink,
                target: '_blank',
                rel: 'noopener noreferer',
              },
            },
          ]
        : []
    }
  />
);
Profile.argTypes = {
  overline: {
    defaultValue: 'Portfolio',
    control: { type: 'text' },
  },
  overlineSecondary: {
    defaultValue: 'May 2020',
    control: { type: 'text' },
  },
  title: {
    defaultValue: 'AppBoxo',
    control: { type: 'text' },
  },
  imageSource: {
    defaultValue:
      'https://images.prismic.io/antlerco/f14c11d3-6c58-46d0-b22c-83bf8bfa9fe9_Antler+Appboxo+Team+picture.jpg?auto=compress,format&rect=0,313,6000,3375&w=1920&h=1080',
    control: { type: 'text' },
  },
};

export const ProfileTabbed = args => (
  <ProfileTabbedCard
    {...args}
    style={{ width: args.width }}
    image={{ imageUrl: args.imageSource }}
    tabs={[
      { label: args.tabLabel, body: args.body },
      {
        label: 'Info',
        body: (
          <>
            <CardInfoList
              infoList={[
                { name: 'Primary', value: 'Consumer' },
                { name: 'B. Model', value: 'Marketplace' },
              ]}
            />
            <CardTagList
              name="Focus Area"
              tags={['Corporate Strategy', 'IoT Solutions', 'E-Commerce']}
            />
          </>
        ),
      },
      {
        label: 'Disabled',
        disabled: true,
      },
    ]}
    actionRows={[
      {
        primaryLink: {
          label: args.buttonLabel,
          href: args.buttonLink,
          target: '_blank',
          rel: 'noopener noreferer',
        },
      },
    ]}
  />
);
ProfileTabbed.argTypes = {
  ...Profile.argTypes,
  tabLabel: {
    defaultValue: 'About',
    control: { type: 'text' },
  },
};
