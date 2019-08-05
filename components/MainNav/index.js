import React from 'react';
import Link from 'next/link';

const links = [
    {
        href: '/',
        label: 'Лучшие Пиццерии'
    },
    {
        href: '/discounts',
        label: 'Все Акции'
    },
    {
        href: '/recipes',
        label: 'Рецепты'
    },
    {
        href: '/pizzahub',
        label: 'Пицца Hub'
    },
    {
        href: '/pizzamap',
        label: 'Карта Пиццерий'
    },
];

const Nav = () => (
    <nav>
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}><a>{link.label}</a></Link>
                </li>
            ))}
        </ul>
  </nav>
);

export default Nav
