import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const mock = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // const { debug } = render(<PostCard {...mock} />);
    // debug();
    render(<PostCard {...mock} />);

    expect(screen.getByAltText(/title 1/)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
