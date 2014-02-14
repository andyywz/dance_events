class Event < ActiveRecord::Base
  attr_accessible :housing, :name, :paid, :price, :transport
  
  validates :name, presence: true, uniqueness: true
end
