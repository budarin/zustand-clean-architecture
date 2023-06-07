type CategoryIconId = Id;
type CategoryName = string;

type Category = {
    category_id: Id;
    icon_id: CategoryIconId;
    category: CategoryName;
};

type NewCategory = Omit<Category, 'category_id'>;
