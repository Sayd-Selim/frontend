import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import TagIcon from '@mui/icons-material/Tag'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'
import styles from './TagsBlock.module.scss'
import { SideBlock } from '../SideBlock'

export const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <div className={styles.tags}>
      <SideBlock title='Тэги'>
        <List>
          {(isLoading ? [...Array(5)] : items.join(',').split(',')).map(
            (name, i) => (
              <a
                style={{ textDecoration: 'none', color: 'black' }}
                href={`/tags/${name}`}
              >
                <ListItem key={i} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TagIcon />
                    </ListItemIcon>
                    {isLoading ? (
                      <Skeleton width={100} />
                    ) : (
                      <ListItemText primary={name} />
                    )}
                  </ListItemButton>
                </ListItem>
              </a>
            )
          )}
        </List>
      </SideBlock>
    </div>
  )
}
