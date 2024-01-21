import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avif = src.replace(".jpg", ".avif");
  const avif2x = src.replace(".jpg", "@2x.avif");
  const avif3x = src.replace(".jpg", "@3x.avif");

  const jpg2x = src.replace(".jpg", "@2x.jpg");
  const jpg3x = src.replace(".jpg", "@3x.jpg");

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <div>
          <picture>
            <source srcSet={`${avif} 1x, ${avif2x} 2x, ${avif3x} 3x`} />
            <source srcSet={`${src} 1x, ${jpg2x} 2x, ${jpg3x} 3x`} />
            <Image src={src} alt={alt} />
          </picture>
        </div>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  white-space: nowrap;
  &:last-of-type {
    overflow: clip;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
