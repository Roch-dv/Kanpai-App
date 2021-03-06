class Order < ApplicationRecord
  has_many :order_items, dependent: :destroy
  has_many :menu_items, through: :order_items
  belongs_to :table
  monetize :price_cents

  validates :status, inclusion: { in: %w(pending paid),
    message: "%{value} is not a valid status" }
end
