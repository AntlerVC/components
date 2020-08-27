import React from 'react';
import clsx from 'clsx';
import { useImage } from 'react-image';

import { makeStyles, createStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

import ErrorBoundary, { IErrorBoundaryProps } from './ErrorBoundary';
import EmptyState from './EmptyState';

const useStyles = makeStyles(theme =>
  createStyles({
    root: ({
      objectFit,
      shape,
      border,
    }: Pick<IThumbnailProps, 'objectFit' | 'shape' | 'border'>) => ({
      objectFit: objectFit as any,
      borderRadius:
        shape === 'circle'
          ? '50%'
          : shape === 'square'
          ? 0
          : theme.shape.borderRadius,
      boxShadow: border ? `0 0 0 1px ${theme.palette.divider} inset` : 'none',

      display: 'block',
      pointerEvents: 'none',
      userSelect: 'none',
    }),

    skeleton: ({ shape }: Pick<IThumbnailProps, 'shape'>) => ({
      borderRadius:
        shape === 'circle'
          ? '50%'
          : shape === 'square'
          ? 0
          : theme.shape.borderRadius,
      display: 'block',
    }),
  })
);

export interface IThumbnailProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imageUrl: string;
  size?: string;

  objectFit?: string;
  shape?: 'roundedRectangle' | 'square' | 'circle';
  border?: boolean;

  ErrorBoundaryProps?: Partial<IErrorBoundaryProps>;
}

/**
 * Display a thumbnail generated by FT_compressedThumbnail cloud function,
 * falling back to original image if it doesn’t load.
 *
 * Uses react-image: https://github.com/mbrevda/react-image
 */
function Thumbnail_({
  imageUrl,
  size = '200x200',

  objectFit = 'cover',
  shape = 'roundedRectangle',
  border = false,

  ...props
}: IThumbnailProps) {
  const classes = useStyles({ objectFit, shape, border });

  // Add size suffix just before file name extension (e.g. .jpg)
  const thumbnailUrl = imageUrl.replace(
    /(\.[\w]+\?.*token=[\w-]+$)/,
    `__${size}$1`
  );

  const { src, isLoading, error } = useImage({
    srcList: [thumbnailUrl, imageUrl],
    useSuspense: false,
  });

  if (isLoading)
    return (
      <Skeleton
        variant="rect"
        className={clsx(classes.skeleton, props.className)}
      />
    );

  if (error)
    return (
      <EmptyState
        basic
        message=""
        Icon={BrokenImageIcon}
        className={props.className}
      />
    );

  return (
    <img {...props} src={src} className={clsx(classes.root, props.className)} />
  );
}

/**
 * Wrap thumbnail in an ErrorBoundary
 */
export default function Thumbnail({
  ErrorBoundaryProps,
  ...props
}: IThumbnailProps) {
  return (
    <ErrorBoundary
      basic
      message=""
      Icon={BrokenImageIcon}
      className={props.className}
      {...(ErrorBoundaryProps as any)}
    >
      <Thumbnail_ {...props} />
    </ErrorBoundary>
  );
}
