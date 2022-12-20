import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: '100%' }}
      variant='quilted'
      cols={4}
      rowHeight={350}>
      {itemData.map(item => (
        <ImageListItem
          onClick={() => (window.location.href = item.url)}
          key={item.img}
          sx={{
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
          cols={item.cols || 1}
          rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/wines.webp',
    title: 'Wines Web Site',
    url: 'https://wines-numen.netlify.app/',
    rows: 2,
    cols: 2,
  },
  {
    img: '/todo.webp',
    title: 'Todo App Web Site',
    url: 'https://todo-andriy.netlify.app/',
  },
  {
    img: '/portfolio.webp',
    title: 'Minimalist Portfolio Website',
    url: 'https://ak-min-portfolio.netlify.app/',
  },
  {
    img: '/omnifood.webp',
    title: 'Omnifood Web Site',
    cols: 2,
    url: 'https://omnifood-andriy.netlify.app',
  },
];
