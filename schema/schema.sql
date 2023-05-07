CREATE TABLE public.todos (
  todo_id SERIAL,
  todo TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMP(0) WITHOUT TIME ZONE,
  deleted BOOLEAN DEFAULT false NOT NULL,
  status_id SMALLINT NOT NULL,
  category_id SMALLINT,
  CONSTRAINT todos_pkey PRIMARY KEY(todo_id),
  CONSTRAINT todos_description_chk CHECK ((length(description) >= 10) AND (length(description) <= 500)),
  CONSTRAINT todos_todo_chk CHECK ((length(todo) >= 5) AND (length(todo) <= 100)),
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

CREATE TABLE public.statuses (
  status_id SMALLSERIAL,
  status TEXT NOT NULL,
  color TEXT NOT NULL,
  CONSTRAINT statuses_pkey PRIMARY KEY(status_id),
  CONSTRAINT statuses_status_key UNIQUE(status),
  CONSTRAINT statuses_status_chk CHECK ((length(status) >= 3) AND (length(status) <= 20))
) ;

CREATE TABLE public.categories (
  category_id SMALLINT NOT NULL,
  category TEXT NOT NULL,
  icon_id SMALLINT NOT NULL,
  CONSTRAINT categories_category_key UNIQUE(category),
  CONSTRAINT categories_pkey PRIMARY KEY(category_id),
  CONSTRAINT categories_category_chk CHECK ((length(category) >= 3) AND (length(category) <= 15)),
  CONSTRAINT categories_fk FOREIGN KEY (icon_id)
    REFERENCES public.icons(icon_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    NOT DEFERRABLE
) ;

CREATE TABLE public.icons (
  icon_id SMALLINT NOT NULL,
  icon_name TEXT NOT NULL,
  CONSTRAINT icons_icon_name_key UNIQUE(icon_name),
  CONSTRAINT icons_pkey PRIMARY KEY(icon_id),
  CONSTRAINT icons_icon_name_chk CHECK ((length(icon_name) >= 5) AND (length(icon_name) <= 20))
) ;