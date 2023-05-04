CREATE TABLE public.categories (
  category_id SMALLSERIAL,
  category VARCHAR(20) NOT NULL,
  icon_id SMALLINT NOT NULL,
  CONSTRAINT categories_category_key UNIQUE(category),
  CONSTRAINT categories_pkey PRIMARY KEY(category_id),
  CONSTRAINT categories_fk FOREIGN KEY (icon_id)
    REFERENCES public.icons(icon_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    NOT DEFERRABLE
) ;

CREATE TABLE public.icons (
  icon_id SMALLSERIAL,
  icon_name TEXT NOT NULL,
  CONSTRAINT category_icons_icon_name_key UNIQUE(icon_name),
  CONSTRAINT category_icons_pkey PRIMARY KEY(icon_id)
) ;

CREATE TABLE public.statuses (
  status_id SMALLSERIAL,
  status VARCHAR(20) NOT NULL,
  color TEXT NOT NULL,
  CONSTRAINT todo_statuses_color_key UNIQUE(color),
  CONSTRAINT todo_statuses_pkey PRIMARY KEY(status_id),
  CONSTRAINT todo_statuses_status_key UNIQUE(status)
) ;

CREATE TABLE public.todos (
  todo_id SERIAL,
  todo VARCHAR(150) NOT NULL,
  description VARCHAR(1000),
  due_date TIMESTAMP(0) WITHOUT TIME ZONE,
  deleted BOOLEAN DEFAULT false NOT NULL,
  status_id SMALLINT,
  category_id SMALLINT,
  CONSTRAINT todos_pkey PRIMARY KEY(todo_id),
  CONSTRAINT todos_fk FOREIGN KEY (status_id)
    REFERENCES public.statuses(status_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    NOT DEFERRABLE,
  CONSTRAINT todos_fk1 FOREIGN KEY (category_id)
    REFERENCES public.categories(category_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    NOT DEFERRABLE
) ;
