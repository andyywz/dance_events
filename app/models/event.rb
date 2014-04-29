class Event < ActiveRecord::Base
  attr_accessible :housing, :name, :paid, :price, :transport
  validate :name, presence: true
end
