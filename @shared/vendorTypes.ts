import { FC as ReactFC } from 'react';

type FC<TProps> = ReactFC<TProps & { className?: string }>;

export type { FC };
export type { VFC, Component, ReactChild, ReactChildren } from 'react';
export type { NextPage } from 'next'
export type { AppProps } from 'next/app';

