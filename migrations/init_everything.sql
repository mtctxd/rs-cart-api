DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE statuses AS ENUM ('OPEN', 'ORDERED');

CREATE TABLE carts (
    id UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT Now(),
    updated_at TIMESTAMP NOT NULL,
    status statuses NOT NULL
);

CREATE TABLE cart_items (
    cart_id UUID REFERENCES carts(id),
    product_id UUID NOT NULL,
    count INT NOT NULL
);

INSERT INTO carts (id, user_id, created_at, updated_at, status)
VALUES ('792e6f3e-6f26-44d6-a38b-37ed878cc699', '792e6f3e-6f26-44d6-a38b-37ed878cc111', '2023-04-04', '2023-04-04', 'OPEN');

INSERT INTO cart_items (cart_id, product_id, count)
VALUES ('792e6f3e-6f26-44d6-a38b-37ed878cc699', '123e4567-e89b-12d3-a456-426614174001', 1),
       ('792e6f3e-6f26-44d6-a38b-37ed878cc699', '123e4567-e89b-12d3-a456-426614174002', 2);

      
INSERT INTO carts (id, user_id, created_at, updated_at, status)
VALUES ('792e6f3e-6f26-44d6-a38b-37ed878cc445', '792e6f3e-6f26-44d6-a38b-37ed878cc222', '2023-04-05', '2023-04-06', 'ORDERED');

INSERT INTO cart_items (cart_id, product_id, count)
VALUES ('792e6f3e-6f26-44d6-a38b-37ed878cc445', '123e4567-e89b-12d3-a456-426614174001', 10),
       ('792e6f3e-6f26-44d6-a38b-37ed878cc445', '123e4567-e89b-12d3-a456-426614174002', 15);
